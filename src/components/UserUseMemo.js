import React from 'react'

function UserUseMemo({ data }) {
  console.log('User component re-render');

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default React.memo(UserUseMemo);