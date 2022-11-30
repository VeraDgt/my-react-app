import styles from "./Profile.module.css";


const Profile = (props)=> {
  let userId = location.pathname.split("/")[2];
  let user = props.function(userId);
  
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"80%"}/>
      </div>
      <div className="col-sm-9">
        <h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
        <h2 className={styles.about}>О себе: {user.about}</h2>
        <p className={styles.email}>E-mail: {user.email}</p>
        <p style={{fontWeight: "700"}}>Id: {user.id}</p>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, modi doloribus nobis voluptate quisquam perspiciatis quis repellat voluptatibus, officia sint dolorem commodi, esse dolorum repudiandae cupiditate debitis earum adipisci? Accusantium?</p>
      </div>
    </div>
  );
};
export default Profile;