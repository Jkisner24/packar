import Link from "next/link"

export default function NotFound(){
    return(
        <section>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href="/">Back Home</Link>
        </section>
    )
}