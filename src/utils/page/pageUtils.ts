export function getFullPageName(pageName: string): string {
    return 'LiteCRM' + (pageName ? ` - ${pageName}` : '')
}
