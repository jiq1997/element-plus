import type {
  ComponentInfo,
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'
import { kebabCase } from 'unplugin-vue-components'

export interface ElementPlusResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp

  /**
   * a list of component names that have no styles, so resolving their styles file should be prevented
   */
  noStylesComponents?: string[]

  /**
   * nightly version
   */
  nightly?: boolean
}

type ElementPlusResolverOptionsResolved = Required<
  Omit<ElementPlusResolverOptions, 'exclude'>
> &
  Pick<ElementPlusResolverOptions, 'exclude'>

function getSideEffects(
  dirName: string,
  options: ElementPlusResolverOptionsResolved
): SideEffectsInfo | undefined {
  const { importStyle, ssr, nightly } = options
  const themeFolder = nightly
    ? '@sl-design/nightly/theme-chalk'
    : 'sl-design/theme-chalk'
  const esComponentsFolder = nightly
    ? '@sl-design/nightly/es/components'
    : 'sl-design/es/components'

  if (importStyle === 'sass') {
    return ssr
      ? [`${themeFolder}/src/base.scss`, `${themeFolder}/src/${dirName}.scss`]
      : [
          `${esComponentsFolder}/base/style/index`,
          `${esComponentsFolder}/${dirName}/style/index`,
        ]
  } else if (importStyle === true || importStyle === 'css') {
    return ssr
      ? [`${themeFolder}/base.css`, `${themeFolder}/sl-${dirName}.css`]
      : [
          `${esComponentsFolder}/base/style/css`,
          `${esComponentsFolder}/${dirName}/style/css`,
        ]
  }
}

function resolveComponent(
  name: string,
  options: ElementPlusResolverOptionsResolved
): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return

  if (!name.match(/^Sl[A-Z]/)) return

  if (name.match(/^SlIcon.+/)) {
    return {
      name: name.replace(/^SlIcon/, ''),
      from: 'sl-design/icons-vue',
    }
  }

  const partialName = kebabCase(name.slice(2)) // ElTableColumn -> table-column
  const { ssr, nightly } = options

  return {
    name: `El${name.slice(2)}`,
    from: `${nightly ? 'sl-design/nightly' : 'sl-design'}/${
      ssr ? 'lib' : 'es'
    }`,
    sideEffects: getSideEffects(partialName, options),
  }
}

function resolveDirective(
  name: string,
  options: ElementPlusResolverOptionsResolved
): ComponentInfo | undefined {
  if (!options.directives) return

  const directives: Record<string, { importName: string; styleName: string }> =
    {
      Loading: { importName: 'ElLoadingDirective', styleName: 'loading' },
      Popover: { importName: 'ElPopoverDirective', styleName: 'popover' },
      InfiniteScroll: {
        importName: 'ElInfiniteScroll',
        styleName: 'infinite-scroll',
      },
    }

  const directive = directives[name]
  if (!directive) return

  const { ssr, nightly } = options

  return {
    name: directive.importName,
    from: `${nightly ? '@sl-design/nightly' : 'sl-design'}/${
      ssr ? 'lib' : 'es'
    }`,
    sideEffects: getSideEffects(directive.styleName, options),
  }
}

const noStylesComponents = ['SlAutoResizer']

/**
 * Resolver for Element Plus
 *
 * See https://github.com/antfu/vite-plugin-components/pull/28 for more details
 * See https://github.com/antfu/vite-plugin-components/issues/117 for more details
 *
 * @author @develar @nabaonan @sxzz
 * @link https://sl-design.org/ for sl-design
 *
 */
export function ElementPlusResolver(
  options: ElementPlusResolverOptions = {}
): ComponentResolver[] {
  let optionsResolved: ElementPlusResolverOptionsResolved

  async function resolveOptions() {
    if (optionsResolved) return optionsResolved
    optionsResolved = {
      ssr: false,
      importStyle: 'css',
      directives: true,
      exclude: undefined,
      noStylesComponents: options.noStylesComponents || [],
      nightly: false,
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name: string) => {
        const options = await resolveOptions()
        console.log('%c!<----start ---->', 'color:mediumspringgreen')
        console.log(resolveComponent(name, options))
        console.log('%c!<---- end ---->', 'color:mediumspringgreen')
        if (
          [...options.noStylesComponents, ...noStylesComponents].includes(name)
        )
          return resolveComponent(name, { ...options, importStyle: false })
        else return resolveComponent(name, options)
      },
    },
    {
      type: 'directive',
      resolve: async (name: string) => {
        return resolveDirective(name, await resolveOptions())
      },
    },
  ]
}
