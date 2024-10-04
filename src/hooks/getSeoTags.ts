import {ISeoSettings} from "../interface/ISeoSettings";

export const getSeoTags = (tagsArray: ISeoSettings[]) => {
    tagsArray.map(seoTag => {
        if (seoTag.tag === 'pixel') {
            const template = document.createElement('template');
            template.innerHTML = seoTag.code.trim();
            const node: Node = template.content.firstChild as Node;
            document.head.appendChild(node)
        } else if (seoTag.tag === 'meta_tag') {
            if (seoTag.code) {
                const template = document.createElement('template');
                template.innerHTML = seoTag.code.trim();
                const node: Node = template.content.firstChild as Node;
                document.head.appendChild(node)
            } else if (seoTag.tagName && seoTag.content) {
                let tag = document.createElement('meta');
                tag.name = seoTag.tagName;
                tag.content = seoTag.content
                document.head.appendChild(tag)
            }
        }
    })
}

