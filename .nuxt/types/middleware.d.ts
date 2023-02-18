import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/phattarakorn/Documents/Fox_in_the_box_Project/code/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}