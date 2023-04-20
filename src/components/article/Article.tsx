import React from 'react'
import style from '../../styles/Home.module.css'


const Article = () => {
    return (
        <div>
            <div className={style.article}>
                <img className={style.articleimg} src="/hero.jpeg" alt="" />
                <div className={style.text}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur eligendi deleniti cupiditate nostrum aliquid maiores laudantium exercitationem dicta molestiae odio incidunt tempore porro commodi pariatur officiis soluta sequi quaerat?
                        Quibusdam alias placeat aliquid itaque, aliquam sit. Doloribus hic molestiae voluptates alias modi, aliquam est illo recusandae nisi ipsum odio. Deserunt aspernatur similique labore iure laboriosam recusandae est, iusto id!
                        Possimus dolorem recusandae amet iure earum qui molestia
                        Dolorum officia omnis cupiditate laboriosam, aperiam
                        eum iusto quia, temporibus, similique unde non cum eius.</h2></div>

            </div>
        </div>
    )
}

export default Article