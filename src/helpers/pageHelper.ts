export function setPageTitle(title: string): void {
    document.title = 'LiteCRM' + (title ? ` - ${title}` : '')
}

export function getPageTitle(): string {
    return document.title.replace('LiteCRM - ', '')
}
