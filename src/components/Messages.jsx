import pageImg from "../assets/img/sea.jpg"
import textBackground from "../assets/img/North1.jpg"

const Messages = ()=> {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
        <img src={pageImg} alt="" width={"100%"} />
      </div>
      <div className="col-md-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus veritatis fugiat animi ipsa consectetur tempora eligendi deserunt, facere commodi minima placeat iusto reprehenderit amet sed fuga explicabo! Iste, autem asperiores!
        Laborum nemo aut ipsum minima tenetur. Fuga cupiditate magni labore aspernatur quasi, adipisci distinctio nemo culpa odio at totam saepe dolorem a. Animi earum beatae qui quam doloremque! Sit, magnam!
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 offset-6" style={{ backgroundImage: `url(${textBackground})` }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eos omnis, sint quia eum nobis quisquam adipisci temporibus nulla sunt commodi, dignissimos magni laborum vel tempora voluptas, exercitationem at. Excepturi!</div>
    </div>
    </>
  )
};
export default Messages;