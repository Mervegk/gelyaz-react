import React from 'react'
import PropType from "prop-types"

function User({ data, friends, title }) {




  return (
    <div>
      <p>{title}</p>
      <div>İsim: {data.fullName}</div>
      <div>Şehir: {data.city}</div>
      <div>Yaş: {data.age}</div>
      <h3>Arkadaşları</h3>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }
    </div>
  )
}
User.propTypes = {
  title: PropType.string.isRequired,
  data: PropType.exact({
    fullName: PropType.string.isRequired,
    city: PropType.string,
    age: PropType.number
  }),
  friends: PropType.array
}
User.defaultProps = {
  title: 'Kişi'
}
export default User;