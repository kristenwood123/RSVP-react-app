import styled from 'styled-components'

export const RsvpSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6rem;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px;

.rsvp {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

label[for='name'] {
  width: 150px;
}

input {
  margin-top: 10px;
  margin-bottom: 10px;
}

hr {
  width: 120px;
  margin-bottom: 2rem;
}
`
export const AttendingTitle = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #f4f5f7;
`

export const Label = styled.label`
  display: inline-flex;

  .checkbox__box {
    width: 200px;
    margin-top: 8px;
  }

  .checkbox {
    text-align: center;
  }
`