// import React, { Component } from 'react';
// import { Path } from '../../enums/Path';
// import Button from '../../components/Button/Button';
// import Card from '../../components/Card/Card';
// import Input from '../../components/Input/Input';
// import Link from '../../components/Link/Link';
// import styles from './index.module.scss';
// import HttpClient from '../../../helpers/HttpClient';

// const urls = {
//     register: 'Api/V1/Registration/Register'
// };

// interface Props {
// }

// interface State {
//     isLoading: boolean,
//     errors: string[],
//     name: string,
//     email: string,
//     password: string,
//     confirmPassword: string
// }

// export default class Registration extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             isLoading: false,
//             errors: [],
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }

//     componentDidMount() {
//         document.title = 'Регистрация';
//     }

//     render() {
//         return (
//             <div className={styles.layout}>
//                 <div className={styles.left} />
//                 <div className={styles.form}>
//                     <Card>
//                         <h2>Регистрация</h2>
//                         <p className={styles.errors}>{this.state.errors}</p>
//                         <Input placeholder='Имя' value={this.state.name}
//                             onChange={(value: string) => this.setState({ name: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)} />
//                         <Input placeholder='Email' value={this.state.email}
//                             onChange={(value: string) => this.setState({ email: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)} />
//                         <Input type='password' placeholder='Пароль' value={this.state.password}
//                             onChange={(value: string) => this.setState({ password: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)} />
//                         <Input type='password' placeholder='Повторите пароль' value={this.state.confirmPassword}
//                             onChange={(value: string) => this.setState({ confirmPassword: value })}
//                             onKeyDown={(value: string) => this.onKeyDownInputs(value)} />
//                         <div className={styles.registerLayout}>
//                             <div className={styles.button}>
//                                 <Button disabled={!this.isRegisterAllowed()}
//                                     onClick={() => this.onClickRegister()}>Зарегистрироваться</Button>
//                             </div>
//                             <div className={styles.links}>
//                                 <Link value={Path.offer}>Оферта</Link>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
//                 <div className={styles.right} />
//             </div>
//         );
//     }

//     isRegisterAllowed() {
//         return this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmPassword.length > 0 && !this.state.isLoading;
//     }

//     register() {
//         this.setState({
//             isLoading: true
//         }, async () => {
//             const data = {
//                 Name: this.state.name,
//                 Email: this.state.email,
//                 Password: this.state.password,
//                 ConfirmPassword: this.state.confirmPassword
//             };

//             const response = await HttpClient.post(urls.register, data);

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

//     onClickRegister() {
//         this.register();
//     }

//     onKeyDownInputs(key: string) {
//         if (key !== 'Enter') {
//             return;
//         }

//         const isRegisterAllowed = this.isRegisterAllowed();
//         if (!isRegisterAllowed) {
//             return;
//         }

//         this.register();
//     }
// }