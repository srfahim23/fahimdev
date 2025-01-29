import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")
      if (id && id.startsWith("#")) {
        const element = document.querySelector(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])
}

