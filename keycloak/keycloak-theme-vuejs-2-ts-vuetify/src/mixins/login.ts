import { Environment } from '@/@types/environment';

import { Vue, Inject } from 'vue-property-decorator';
// import inject from 'vue';

export default class Login extends Vue {
  @Inject('environment') private env!: Environment;

  get urls() {
    return this.env.urls;
  }

  get titles() {
    return this.env.titles;
  }

  get permissions() {
    return this.env.permissions;
  }

  get labels() {
    return this.env.labels;
  }
  get forms() {
    return this.env.forms;
  }
  get validations() {
    return this.env.validations;
  }
  get message() {
    return this.env.message;
  }
  get social() {
    return this.env.social;
  }

  getUrl(url: string) {
    return url.replace(/(&amp;)/g, '&');
  }
  getUsernameLabel() {
    if (!this.env.permissions.loginWithEmailAllowed) {
      return this.env.labels.username;
    }
    if (!this.env.permissions.registrationEmailAsUsername) {
      return this.env.labels.usernameOrEmail;
    }
    return this.env.labels.email;
  }

  getIcon(type: string) {
    if (type === 'info') {
      return '<i class="fas fa-info-circle"></i>';
    }
    if (type === 'error') {
      return '<i class="fas fa-times-circle"></i>';
    }
    if (type === 'warning') {
      return '<i class="fas fa-exclamation-triangle"></i>';
    }
    if (type === 'success') {
      return '<i class="fas fa-check-circle"></i>';
    }
    if (type === 'github') {
      return '<i class="fab fa-github"></i>';
    }
    return '<i></i>';
  }
}

// export default {
  // inject('environment') as Environment,
//   computed: {
//     urls() {
//       return env.urls as EnvUrl
//     },
//     titles() {
//       return env.titles as EnvTitle)
//     },
//     permissions() {
//       return env.permissions as EnvPermission
//     },
//     labels() {
//       return env.labels as EnvLabel
//     },
//     forms() {
//       return env.forms as EnvForm
//     },
//     validations() {
//       return env.validations as EnvValidation
//     },
//     message() {
//       return env.message as EnvMessage
//     },
//     social() {
//       return env.social as EnvSocial[]
//     },

//   },
//   methods: {
//     getUrl(url: string) {
//       return url.replace(/(&amp;)/g, "&");
//     },
//     getUsernameLabel() {
//       if (!env.permissions.loginWithEmailAllowed) {
//         return env.labels.username;
//       }
//       if (!env.permissions.registrationEmailAsUsername) {
//         return env.labels.usernameOrEmail;
//       }
//       return env.labels.email;
//     },

//     getIcon(type: string) {
//       if (type === "info") {
//         return '<i class="fas fa-info-circle"></i>';
//       }
//       if (type === "error") {
//         return '<i class="fas fa-times-circle"></i>';
//       }
//       if (type === "warning") {
//         return '<i class="fas fa-exclamation-triangle"></i>';
//       }
//       if (type === "success") {
//         return '<i class="fas fa-check-circle"></i>';
//       }
//       if (type === "github") {
//         return '<i class="fab fa-github"></i>';
//       }
//       return "<i></i>";
//     }
//   }
// }
