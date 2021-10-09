export default interface ProductAttributesActionsState {
    isLoading: boolean
    ids: string[]
    setIds: (ids: string[]) => void
    isDeleting: boolean
    delete: () => Promise<void>
    setIsDeleting: (state: boolean) => void
    isRestoring: boolean
    setIsRestoring: (state: boolean) => void
    restore: () => Promise<void>
}

export const productAttributesActionsInitialState: ProductAttributesActionsState = {
    isLoading: false,
    ids: [],
    setIds: (_: string[]) => void 0,
    isDeleting: false,
    setIsDeleting: (_: boolean) => void 0,
    delete: () => Promise.resolve(void 0),
    isRestoring: false,
    setIsRestoring: (_: boolean) => void 0,
    restore: () => Promise.resolve(void 0)
}
