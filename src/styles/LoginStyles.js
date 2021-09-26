import styled from 'styled-components'

export const LoginForm = styled.form`
  width: 90%;
  border: 1px solid var(--gray-border);
  border-radius: 8px;
  margin-top: 1rem;
  padding-bottom: 2rem;
  max-width: 500px;

  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type='email'],
  input[type='password'] {
    margin-bottom: 20px;
    width: 200px;
  }
`