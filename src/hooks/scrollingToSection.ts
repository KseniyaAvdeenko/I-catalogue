
export function scrollingToSection(sectionId: string, ref:HTMLElement|null){
    if(ref && ref.childNodes){
        ref.childNodes.forEach(child=>{
            if(child instanceof HTMLElement && child.id === sectionId){
                child.scrollIntoView({behavior: 'smooth'})
            }
        })
    }
}