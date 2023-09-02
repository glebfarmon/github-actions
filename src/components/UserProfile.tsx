const UserProfile = ({name, surname, age}: {name: string; surname: string; age: number}) => {
  return (
    <div>
      <p>Your name: {name}</p>
      <p>Your surname: {surname}</p>
      <p>Your age: {age}</p>
      <p>Is adult: {age >= 18 ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default UserProfile
