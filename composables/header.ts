import { reactive } from "vue";
import { debounce } from "~/utils/debounce";

export function useHeader() {
  const search = ref(null);

  const form: { search: string } = reactive({
    search: "",
  });
  const clearSearch = (): string => (form.search = "");

  const searchWord = computed<string[]>(() => {
    return form.search ? [form.search] : [""];
  });
  const searchProduct = (product: string): void => {
    console.log("product name", product);
  };

  const showSearchDropdown = ref<boolean>(false);
  const toggleSearchDropdown = (
      val: boolean = !showSearchDropdown.value,
    ): boolean => (showSearchDropdown.value = val);

  watch(
    () => form.search,
    () => {
      if (!showSearchDropdown.value) {
        console.log(showSearchDropdown.value);
        toggleSearchDropdown(true);
      }
      debounce("search-product", () => searchProduct(form.search), 500);
    },
  );

  return {
    search,
    form,
    showSearchDropdown,
    searchWord,
    clearSearch,
    toggleSearchDropdown,
  };
}
