import React, { useState } from 'react';

import Cover from "./storyPages/Cover"
import PageOne from "./storyPages/PageOne"
import EggShardLaboratory from "./storyPages/EggShardLaboratory"
import EggShardLaboratoryTwo from "./storyPages/EggShardLaboratoryTwo"
import EggShardLaboratoryThree from "./storyPages/EggShardLaboratoryThree"
import Backcover from "./storyPages/Backcover";

const StoryTime = () => { 

    const pages = [<Cover/>, <PageOne/>, <EggShardLaboratory/>, <EggShardLaboratoryTwo/>, <EggShardLaboratoryThree/>, <Backcover/>];

    const [currentPage, setCurrentPage] = useState(0);
    const length = pages.length

    const nextPage = () => { 
        setCurrentPage(currentPage === length -1 ? 0 : currentPage + 1)
    }

    const previousPage = () => { 
        setCurrentPage(currentPage === 0 ? length -1 : currentPage - 1)
    }
    return (
        <div className ="story-background">
            <div className = "story-wrapper">
                <i className= {currentPage === 0 ? "" : "book-arrow book-arrow-left fa fas fa-arrow-circle-left fa-4x"} onClick ={previousPage}></i>
                        {
                            pages.map((page, index) => { 
                            return (
                                <div className ={index === currentPage ? 'page-active': 'page'} key={index}>
                                    {index === currentPage ? page : ""}
                                </div>
                            )
                        })
                    }
                <i className= {currentPage === (pages.length -1) ? "" : "book-arrow book-arrow-right fa fas fa-arrow-circle-right fa-4x"} onClick = {nextPage}></i>
            </div>
        </div>
    )
}

export default StoryTime; 