// import React, { Component } from 'react'
// import { Path } from '../../enums/Path';
// import HttpClient from '../../../helpers/HttpClient';
// import Button from '../../components/Button/Button';
// import Card from '../../components/Card/Card';
// import Checkbox from '../../components/Checkbox/Checkbox';
// import Input from '../../components/Input/Input';
// import Link from '../../components/Link/Link';
// import AuthenticationProviders from './providers';
// import styles from './index.module.scss';

// const urls = {
//     signIn: 'Api/V1/Authentication/SignIn'
// };

// interface Props {
// }

// interface State {
//     isLoading: boolean,
//     errors: [],
//     login: string,
//     password: string,
//     isRemember: boolean
// }

// export default class Authentication extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             isLoading: false,
//             errors: [],
//             login: '',
//             password: '',
//             isRemember: false
//         }
//     }

//     componentDidMount() {
//         document.title = 'Аутентификация';
//     }

//     render() {
//         return (
//             <div className={styles.layout}>
//                 <div className={styles.left}></div>
//                 <div className={styles.form}>
//                     <Card>
//                         <h2>Вход</h2>
//                         <AuthenticationProviders />
//                         <p className={styles.errors}>{this.state.errors}</p>
//                         <Input placeholder='Логин' value={this.state.login}
//                             onChange={(value: string) => this.setState({ login: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)}
//                         />
//                         <Input placeholder='Пароль' type='password' value={this.state.password}
//                             onChange={(value: string) => this.setState({ password: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)}
//                         />
//                         <Checkbox label='Запомнить' checked={this.state.isRemember}
//                             onChange={(checked: boolean) => this.setState({ isRemember: checked })} />
//                         <div className={styles.signInLayout}>
//                             <div className={styles.signInButton}>
//                                 <Button icon='sign-in' disabled={!this.isSignInAllowed()}
//                                     onClick={() => this.onClickSignIn()}>Войти</Button>
//                             </div>
//                             <div className={styles.links}>
//                                 <Link value={Path.restore}>Забыли пароль?</Link>
//                                 <Link value={Path.registration}>Регистрация</Link>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
//                 <div className={styles.right}></div>
//             </div>
//         )
//     }

//     signIn() {
//         this.setState({
//             isLoading: true
//         }, async () => {
//             const data = {
//                 Key: this.state.login,
//                 Password: this.state.password,
//                 IsRemember: this.state.isRemember
//             };

//             const response = await HttpClient.post(urls.signIn, data);

//             if (!response.isSuccess) {
//                 this.setState({
//                     isLoading: false,
//                     errors: response.errors
//                 });

//                 return;
//             }

//             window.location.href = Path.home;
//         });
//     }

//     isSignInAllowed() {
//         return this.state.login.length > 0 && this.state.password.length > 0 && !this.state.isLoading;
//     }

//     onClickSignIn() {
//         this.signIn();
//     }

//     onKeyDownInputs(key: string) {
//         if (key !== 'Enter') {
//             return;
//         }

//         if (!this.isSignInAllowed()) {
//             return;
//         }

//         this.signIn();
//     }
// }