export default function ImagenGaleria({ src, alt }) {
	return <div className="Galeria__grid-imagen">
		<img
			src={src}
			alt={alt}
		/>
	</div>
}