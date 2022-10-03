import NextHead from "next/head"
import React from "react"
export default function Head(keywords, description, ...props){
    return(
        <NextHead>
            <title>{props.title}</title>
            <meta
            name="keywords"
            content={keywords}
            ></meta>
            <meta
            name="description"
            content={description}
            ></meta>
        </NextHead>
    )
}