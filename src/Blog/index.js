import './index.css'

const Blog = () => {
    return(
        <div className='blog'>
            <h1 style={{textAlign: 'center', fontSize: '36px'}}>Blog</h1>
            <h2>"Born a Crime": Trevor Noah's Memoir and the Enduring Legacy of Apartheid</h2>
            <div className='blog-section'>
            <div className='blog-post'>
                <h3>Trevor Noah's memoir "Born a Crime" is a poignant and insightful exploration of his upbringing <br></br>in post-apartheid South Africa. As the child of a black Xhosa mother and a white Swiss father, <br></br>Noah's very existence was considered a crime under the oppressive apartheid regime. This <br></br>deeply personal account not only chronicles Noah's coming-of-age story, but also serves as a <br></br>powerful lens through which to examine the lingering societal and economic impacts of apartheid.</h3>

            </div>
                
                    

            <div>
            <img src='/images/born-a-crime.jpg' className='book-img'/>
            </div>
    
            </div>
        </div>
    )
}

export default Blog