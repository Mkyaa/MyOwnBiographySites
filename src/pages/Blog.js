import React from 'react';

function Blog(props) {
    return (
        <section className='general-container'>
            <header className='general-header'>
                <h3>READ</h3>
                <h1>RECENT BLOG</h1>
            </header>
            <section className='blog-content'>
                <div className='blog-box'>
                    <div className='blog-img bg-img1'></div>
                    <h5>SEPTEMBER 14, 2021    | WEB DESIGN |</h5>
                    <h3>ANI RUINS</h3>
                    <span>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
                </div>
                <div className='blog-box'>
                    <div className='blog-img bg-img2'></div>
                    <h5>SEPTEMBER 18, 2021    | WEB DESIGN |</h5>
                    <h3>OLD CITY MARDIN</h3>
                    <span>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
                </div>
                <div className='blog-box'>
                    <div className='blog-img bg-img3'></div>
                    <h5>SEPTEMBER 21, 2021    | WEB DESIGN |</h5>
                    <h3>BALIKLIGOL</h3>
                    <span>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
                </div>
                <div className='load-more-blog'>
                    <span>LOAD MORE<i className='load-more-again icon-spinner11'></i></span>
                    
                </div>
            </section>
        </section>
    );
}

export default Blog;