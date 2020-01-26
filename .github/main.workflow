workflow "Build and deploy docs" {
  on = "push"
  resolves = ["Generate docs"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "bootstrap"
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
