import { Button } from '@/components/ui/button';
import { ChevronsUpIcon, ReplyIcon, ShareIcon } from 'lucide-react';

function Feed() {
  return (
    <div className="px-8 py-16">
      <main className="flex flex-col max-w-2xl gap-16 mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-muted" />
            <div>
              <p>Miguel Ângelo</p>
              <p className="-mt-1.5 text-muted-foreground text-sm">@miguel5g</p>
            </div>
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
            <span className="text-sm text-muted-foreground">há 7 horas</span>
          </div>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, minima dolorum
            perferendis necessitatibus ratione assumenda temporibus repudiandae molestiae sequi
            saepe distinctio, incidunt vel. Veniam officia quo eveniet reprehenderit mollitia
            tempore!
          </p>

          <div className="flex items-center gap-1 mt-4">
            <Button variant="ghost">
              <ChevronsUpIcon size={16} />
              <span>1.2k</span>
            </Button>
            <Button variant="ghost">
              <ReplyIcon size={16} />
              <span>Responder</span>
            </Button>
            <Button variant="ghost">
              <ShareIcon size={16} />
              <span>Compartilhar</span>
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-muted" />
            <div>
              <p>Miguel Ângelo</p>
              <p className="-mt-1.5 text-muted-foreground text-sm">@miguel5g</p>
            </div>
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
            <span className="text-sm text-muted-foreground">há 7 horas</span>
          </div>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, minima dolorum
            perferendis necessitatibus ratione assumenda temporibus repudiandae molestiae sequi
            saepe distinctio, incidunt vel. Veniam officia quo eveniet reprehenderit mollitia
            tempore!
          </p>

          <div className="flex items-center gap-1 mt-4">
            <Button variant="ghost">
              <ChevronsUpIcon size={16} />
              <span>1.2k</span>
            </Button>
            <Button variant="ghost">
              <ReplyIcon size={16} />
              <span>Responder</span>
            </Button>
            <Button variant="ghost">
              <ShareIcon size={16} />
              <span>Compartilhar</span>
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-muted" />
            <div>
              <p>Miguel Ângelo</p>
              <p className="-mt-1.5 text-muted-foreground text-sm">@miguel5g</p>
            </div>
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
            <span className="text-sm text-muted-foreground">há 7 horas</span>
          </div>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, minima dolorum
            perferendis necessitatibus ratione assumenda temporibus repudiandae molestiae sequi
            saepe distinctio, incidunt vel. Veniam officia quo eveniet reprehenderit mollitia
            tempore!
          </p>

          <div className="flex items-center gap-1 mt-4">
            <Button variant="ghost">
              <ChevronsUpIcon size={16} />
              <span>1.2k</span>
            </Button>
            <Button variant="ghost">
              <ReplyIcon size={16} />
              <span>Responder</span>
            </Button>
            <Button variant="ghost">
              <ShareIcon size={16} />
              <span>Compartilhar</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Feed };
