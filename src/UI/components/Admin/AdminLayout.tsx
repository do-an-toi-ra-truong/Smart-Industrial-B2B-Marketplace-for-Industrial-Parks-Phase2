import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import UnifiedSidebar from "./UnifiedSidebar"
import HeaderCA from "./HeaderCA"

const AdminLayout = () => {

    useEffect(() => {
        // CSS — union of all 3 old layouts
        const cssFiles = [
            '/Admin/assets/styles/bootstrap.min.css',
            '/Admin/assets/styles/bootstrap-icons.css',
            '/Admin/assets/styles/remixicon.css',
            '/Admin/assets/styles/all.min.css',
            '/Admin/assets/styles/phosphor-icons.css',
            '/Admin/assets/styles/lucide.css',
            '/Admin/assets/styles/style.css',
            '/Admin/assets/styles/quill.snow.css',
            '/Admin/assets/styles/quill.bubble.css',
            '/Admin/assets/styles/choices.min.css',
            '/Admin/assets/styles/flatpickr.min.css',    
            '/Admin/assets/styles/main.css',
            '/Admin/assets/styles/superadmin.css',
            '/Admin/assets/styles/indusAdmin.css',
        ]
        const links = cssFiles.map(href => {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = href
            document.head.appendChild(link)
            return link
        })

        // JS — union of all 3 old layouts, loaded sequentially
        const jsFiles = [
            '/Admin/assets/libs/js/email-decode.min.js',
            '/Admin/assets/libs/js/bootstrap.bundle.min.js',
            '/Admin/assets/libs/js/apexcharts.min.js',
            '/Admin/assets/libs/js/chart.umd.js',
            '/Admin/assets/libs/js/echarts.min.js',
            '/Admin/assets/libs/js/simple-datatables.js',
            '/Admin/assets/libs/js/quill.js',
            '/Admin/assets/libs/js/tinymce.min.js',
            '/Admin/assets/libs/js/choices.min.js',
            '/Admin/assets/libs/js/flatpickr.min.js',
            '/Admin/assets/libs/js/super-admin-accounts.js',
            '/Admin/assets/libs/js/super-admin-catalog.js',
            '/Admin/assets/libs/js/super-admin-dashboard.js',
            '/Admin/assets/libs/js/industrial-admin-dashboard.js',
            '/Admin/assets/libs/js/validate.js',
            '/Admin/assets/libs/js/apps-sidebar-toggle.js',
            '/Admin/assets/libs/js/theme.js',
            '/Admin/assets/libs/js/main.js',
        ]

        const scripts: HTMLScriptElement[] = []

        const loadNext = (index: number) => {
            if (index >= jsFiles.length) return
            const script = document.createElement('script')
            script.src = jsFiles[index]
            script.onload = () => loadNext(index + 1)
            script.onerror = () => loadNext(index + 1)
            document.body.appendChild(script)
            scripts.push(script)
        }

        loadNext(0)

        return () => {
            links.forEach(link => link.remove())
            scripts.forEach(script => script.remove())
        }
    }, [])

    return (
        <>
            <HeaderCA />
            <UnifiedSidebar />
            <main id="main" className="main">
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout