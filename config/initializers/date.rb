class ActiveSupport::TimeWithZone
    def as_json(options = {})
        strftime('%Y-%m-%d at %H:%M:%S')
    end
end
