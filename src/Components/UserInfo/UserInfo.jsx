function UserInfo({ name, value, measure, svg, extraClass }) {
  return (
    <div className='userInfo'>
      <div
        className={
          extraClass ? "userInfo__icon " + extraClass : "userInfo__icon"
        }
      >
        <img alt={name} src={svg} />
      </div>
      <div className='userInfo__data'>
        <p className='userInfo__data--value'>
          {value}
          {measure}
        </p>
        <p className='userInfo__data--name'>{name}</p>
      </div>
    </div>
  );
}
export default UserInfo;
