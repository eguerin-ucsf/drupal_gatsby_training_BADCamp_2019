import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"

const RecipeTeaser = ({imgSrc, recipeTitle, recipeDate, recipeSummary, recipeImg, recipeSlug}) => (
    <div><Link to={recipeSlug}><h1>{recipeTitle}</h1></Link>
        <p><Img fixed={recipeImg} /></p>
        <p>{recipeDate}</p>
        <strong>Recipe Summary</strong>
        <p>{recipeSummary}</p>
    </div>
)

export default RecipeTeaser
