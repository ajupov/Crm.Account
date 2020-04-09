export function setPageTitle(title: string): void {
    document.title = 'LiteCRM' + (title ? ` - ${title}` : '')
}
