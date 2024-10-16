export function setFavicon(url: string) {
    let link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
    let shortcutLink = document.createElement('link');
    shortcutLink.rel = "shortcut icon";
    shortcutLink.type = "image/x-icon";
    shortcutLink.href = url;
    document.head.appendChild(shortcutLink);
}
