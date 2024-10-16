export function setPageTitle(title: string) {
    let newTitle = document.createElement('title');
    newTitle.textContent = title
    document.head.appendChild(newTitle);
}