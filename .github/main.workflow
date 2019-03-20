workflow "Build and deploy docs" {
  on = "push"
  resolves = ["Generate docs"]
}

action "Build icons files" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build"
}

action "Generate docs" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run docs"
  needs = ["Build icons files"]
}
