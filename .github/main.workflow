workflow "Build and deploy docs" {
  on = "push"
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
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build icons files"]
  args = "docs"
}
