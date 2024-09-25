const syncuser = () => ({
  schema: {
    pos: {default: "userPosition"},
    rot: {default: "userPosition"},
    Npos: {default: "userPosition"},
    Nrot: {default: "userPosition"},
    load: {type: "boolean" ,default: false},
  },

  init() {
    this.user = undefined;
    this.camera = this.el;
    this.pos = document.getElementById(this.data.pos)
    this.rot = document.getElementById(this.data.rot)
    console.log({pos: this.pos, rot: this.rot})

    try {
      const iframe = document.getElementById("iframe")
      const doc = iframe.contentDocument || iframe.contentWindow.document
      console.log(`try Ok`)
      this.load()
      this.data.load = true
    } catch (error) {
      console.log(`try No`)
      this.data.load = false
    }
    
  },
  tick() {
    if (this.data.load) {
      try {
        this.Npos.object3D.position.copy(this.pos.object3D.position)
        this.Nrot.object3D.rotation.copy(this.rot.object3D.rotation)
        this.Nrot.object3D.rotation.y += 0.7853981633974483
      } catch (error) {
        console.log(error)
      }
    }
    else{this.load()}
  },
  load() {
    const iframe = document.getElementById("iframe")
    const doc = iframe.contentDocument || iframe.contentWindow.document
    this.Npos = doc.getElementById(this.data.Npos)
    this.Nrot = doc.getElementById(this.data.Nrot)
    this.data.load = true
  },
})