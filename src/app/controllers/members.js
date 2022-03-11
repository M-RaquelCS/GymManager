const {age, date} = require('../../lib/utils')

module.exports = {
    index(req,res){
        return res.render("members/index")
    },
    show(req,res){
        const { id } = req.params

        const foundMembers = data.members.find(function(member){
            return member.id == id
        })
    
        if(!foundMembers) return res.send("Instructor not found!")
        
        const member = {
            ...foundMembers,
            age: age(foundMembers.birth),
            services: foundMembers.services.split(','),
            created_at: new Intl.DateTimeFormat("pt-BR").format(foundMembers.created_at),
        }
    
        return res.render('members/show', {member})
    },
    create(req,res){
        return res.render("members/create")
    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if(req.body[key] == ''){
                return res.send('Please, fill all fields!')
            }
        }

        return
    },
    edit(req,res){
        return
    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if(req.body[key] == ''){
                return res.send('Please, fill all fields!')
            }
        }
        return
    },
    delete(req,res){
        return
    },
}

