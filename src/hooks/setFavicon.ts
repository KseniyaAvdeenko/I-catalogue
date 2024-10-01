export function setFavicon(url: string) {
    let link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
}