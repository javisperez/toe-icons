workflow "Build and deploy docs" {
  on = "push"
  resolves = ["Generate docs"]
}

action "Build icons files" {
  uses = "actions/npm@master"
  runs = "build"
}

action "Generate docs" {
  uses = "actions/npm@master"
  runs = "docs"
  needs = ["Build icons files"]
}
