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

.btn {
  margin: 0 auto;
  background-color: var(--color-teal);
  color: white;
  width: 50%;
  border: none;
  border-radius: 8px;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: black;
  color: white;
  font-weight: 500;
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
  }

  .checkbox {
    text-align: center;
  }
`