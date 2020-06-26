// TODO: Move to l10n
export const ProductName = 'Lite CRM'

export function setPageTitle(title: string): void {
    document.title = ProductName + (title ? ` - ${title}` : '')
}

export function getPageTitle(): string {
    return document.title.replace(`${ProductName} - `, '')
}
