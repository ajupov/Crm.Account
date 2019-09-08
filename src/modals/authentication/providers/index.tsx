// import React, { Component } from 'react'
// import HttpClient from '../../../../helpers/HttpClient';
// import Icon from '../../../components/Icon/Icon';
// import styles from './index.module.scss';

// const urls = {
//     getProviders: 'Api/V1/Authentication/GetProviders',
//     signInExternal: 'Api/V1/Authentication/SignInExternal'
// };

// interface Props {
// }

// interface State {
//     data: []
// }

// export default class AuthenticationProviders extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount() {
//         this.getProviders();
//     }

//     render() {
//         if (!this.state.data || !this.state.data.length) {
//             return null;
//         }

//         return (
//             <div className={styles.layout}>
//                 {this.state.data.map(this.renderProvider)}
//             </div>
//         )
//     }

//     renderProvider = (name: string) => {
//         return (
//             <form key={name} className={styles.form} action={urls.signInExternal} method='post'
//                 onClick={event => event.currentTarget.submit()}>
//                 <input name='Provider' value={name} type='hidden' />
//                 <div>
//                     <Icon name={this.getIconName(name)} />
//                 </div>
//             </form>
//         );
//     }

//     async getProviders() {
//         const response = await HttpClient.get(urls.getProviders);
//         this.setState({
//             data: response
//         });
//     }

//     getIconName(name: string) {
//         switch (name) {
//             case 'Odnoklassniki':
//                 return 'odnoklassniki';
//             case 'Google':
//                 return 'google';
//             case 'Vkontakte':
//                 return 'vk';
//             default:
//                 return '';
//         }
//     }
// }