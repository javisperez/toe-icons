workflow "Build and deploy docs" {
  on = "pull_request"
  resolves = ["Generate docs"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build icons files" {
  uses = "actions/npm@master"
  args = "build"
  needs = ["Install dependencies"]
}

action "Generate docs" {
  uses = "actions/npm@master"
  needs = ["Build icons files"]
  args = "docs"
}
