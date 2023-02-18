import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/phattarakorn/Documents/Fox_in_the_box_Project/code/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}