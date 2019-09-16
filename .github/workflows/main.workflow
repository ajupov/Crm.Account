workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "ajupov/crm-app-frontend@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "ajupov/crm-app-frontend@master"
  args = "build-prod"
}

# action "Publish" {
#   needs = "Test"
#   uses = "ajupov/crm-app-frontend@master"
#   args = "publish --access public"
#   secrets = ["NPM_AUTH_TOKEN"]
# }
