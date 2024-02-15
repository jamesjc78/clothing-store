import './category.styles.scss'


const Category = ({category}:CategoryProps) =>{
    const {title,imageUrl} = category
    
    return(
        <div className='category'>
           <div className='category-bg-img' style={{
            backgroundImage: `url(${imageUrl})`
           }}/>
            <div className='category-body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Category