db.users.find( { status: { $in: [ "P", "D" ] } } )