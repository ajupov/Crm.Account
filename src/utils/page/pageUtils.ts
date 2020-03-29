export function getFullPageName(pageName: string): string {
    return 'LiteCRM' + (pageName ? ` - ${pageName}` : '')
}

export function setPageTitle(title: string): void {
    document.title = getFullPageName(title)
}
