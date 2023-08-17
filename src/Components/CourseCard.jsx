// MoviePoster.jsx
import "../assets/Styles/card.scss"
import {  Text } from '@chakra-ui/react'



export default function CourseCard({ movie }) {
  return (
    <>
    <div className="card">
		<div className="poster">
      <img src={movie.poster} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Location Unknown</h1>
      <Text fontSize="sm" color="gray.500">
        {movie.year} • {movie.rating} • {movie.runtime}
      </Text>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span>4.2/5</span>
			</div>
			<div className="tags">
				{movie.gen.map((item , index) =>{
					return <span key={index} className="tag">{item}</span>
				})}
			</div>
			<p className="desc">
				{movie.description}
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					{movie.cast.map((item, index)=>{
						return <li key={index}><img src={item.image} alt={item.name} title={item.name} /></li>
					})}
				</ul>
			</div>
		</div>
	</div>
  </>
  )
}