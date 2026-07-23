import videos from "../data/videos";

function VideoSection() {
  return (
    <section id="innovaciones" className="py-5">
      <div className="container">
        <h2 className="section-title">Innovaciones para la Oficina</h2>
        <p className="text-muted mb-4">
          Videos sobre las últimas tendencias en productos tecnológicos y
          ergonómicos para oficinas modernas.
        </p>
        <div className="row">
          {videos.map((video) => (
            <div className="col-12 col-md-6 col-xl-4 mb-4" key={video.id}>
              <div className="card h-100 video-card shadow-sm border-0">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="card-body">
                  <h3 className="h6 card-title mb-2">{video.titulo}</h3>
                  <p className="small text-muted mb-0">{video.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
